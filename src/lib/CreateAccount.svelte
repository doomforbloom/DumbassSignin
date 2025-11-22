<script lang="ts">
  import { FloatingLabelInput, Button, Alert, Radio } from "flowbite-svelte";
  import { account, tablesDB } from "./AW.svelte";

  let name, epccID, email, password, relationship = null;
  const awId = crypto.randomUUID();
  let submitError, submitSuccess = null;
  let submitting = false;
  let errorMessage = "";

  // send acc info to appwrite
  async function createAccount() {
    submitting = true;
    try {
      const accountResult = await initializeAccount();
      const dbResult = await addDbInfo();

      submitSuccess = true;
      submitError = false;
      setTimeout(() => {
        submitSuccess = false;
      }, 5000);
    } catch (e) {
      errorMessage = e.message || "idk what u did but u messed everything up";
      submitError = true;
      submitSuccess = false;

      setTimeout(() => {
        submitError = false;
      }, 5000);
    } finally {
      submitting = false;
    }
  }

  async function initializeAccount() {
    return await account.create({
        userId: awId,
        email: email,
        password: password,
        name: name,
      })
  }

  async function addDbInfo() {
    return await tablesDB.createRow({
          databaseId: "UserExtraInfoDB",
          tableId: "user_info",
          rowId: awId,
          data: {
            epccRelationship: relationship,
            name: name,
            epccID: epccID
          },
        })
  }

</script>

{#if submitError}
  <Alert class="p-5" color="red">
    <span class="font-medium">Error</span>
    {errorMessage}
  </Alert>
{/if}

{#if submitSuccess}
  <Alert color="green">
    <span class="font-medium">Success!</span>
    Account successfully created!
  </Alert>
{/if}

<form class="flex flex-col gap-4 w-100 p-8 border-gray-500 rounded-lg border-2">
  <h1 class="text-2xl font-semibold">Create New Account</h1>
  <div class="flex flex-col gap-3 mb-2">
    <FloatingLabelInput
      class="col-span-full"
      clearable
      name="Name"
      type="text"
      bind:value={name}
      >Name
    </FloatingLabelInput>
    <FloatingLabelInput
      class="col-span-full"
      clearable
      name="Email"
      type="text"
      bind:value={email}
      >Email
    </FloatingLabelInput>
    <FloatingLabelInput
      class="col-span-full"
      clearable
      name="Password"
      type="password"
      bind:value={password}
      >Password
    </FloatingLabelInput>
    <FloatingLabelInput
      class="col-span-full"
      clearable
      name="epccID"
      type="text"
      bind:value={epccID}
      >EPCC ID
    </FloatingLabelInput>
  </div>
  <div class="flex flex-col gap-2">
    <h3 class="text-xl font-medium">EPCC relationship</h3>
    <ul class="w-full items-center rounded-lg border border-gray-200">
      <li class="w-full">
        <Radio name="relationship" value="Student" classes={{ label: "p-3" }} bind:group={relationship}>Student</Radio>
      </li>
      <li class="w-full">
        <Radio name="relationship" value="Faculty / Staff" classes={{ label: "p-3" }} bind:group={relationship}>Faculty / Staff</Radio>
      </li>
      <li class="w-full">
        <Radio name="relationship" value="Public" classes={{ label: "p-3" }} bind:group={relationship}>Public</Radio>
      </li>
    </ul>
  </div>
  <div class="flex flex-col justify-center items-center">
    <Button loading={submitting} class="py-4 w-1/1" onclick={createAccount}>Create Account</Button>
  </div>
</form>
