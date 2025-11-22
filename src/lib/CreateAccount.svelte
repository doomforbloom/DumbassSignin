<script lang="ts">
  import { FloatingLabelInput, Button, Alert, Radio } from "flowbite-svelte";
  import { account } from "./AW.svelte";

  let name, epcc_id, email, password;
  let submitError = false;
  let submitSuccess;
  let errorMsg = "";
  let buttonLoad = false;

  export async function createAccount(id, email, password, name) {
    try {
      submitError = false;
      const result = await account.create({
        userId: id,
        email: email,
        password: password,
        name: name,
      });
      submitSuccess = true;
    } catch (e) {
      errorMsg = e + "";
      submitError = true;

      if (errorMsg.includes("user_invalid_email")) {
        errorMsg = "Invalid email, please try again";
      } else if (errorMsg.includes("A user with the same id")) {
        errorMsg = "User already exists!";
      } else if (errorMsg.includes("user_invalid_password")) {
        errorMsg = "Password is invalid, try making it more complex";
      } else if (errorMsg.includes("general_argument_invalid")) {
        errorMsg = "Argument error, please ask for assistance";
      } else if (errorMsg.includes("general_not_found")) {
        errorMsg = "General error, please ask for assistance";
      } else {
        errorMsg = "Error, please ask for assistance";
      }
    }
  }
</script>

{#if submitError}
<Alert class="p-5">
  <span class="font-medium">Error</span>
  {errorMsg}
</Alert>
{/if}

{#if submitSuccess}
<Alert color="green">
  <span class="font-medium">Success!</span>
  Account successfully created!
</Alert>
{/if}

<div class="flex flex-col gap-3 w-100 p-7 border-gray-500 rounded-lg border-2">
  <h1 class="text-2xl font-semibold">Create New Account</h1>
  <div class="flex flex-col gap-3 mb-2">
    <FloatingLabelInput class="col-span-full" clearable id="clearable_standard" name="Name" type="text">Name</FloatingLabelInput>
    <FloatingLabelInput class="col-span-full" clearable id="clearable_standard" name="Email" type="text">Email</FloatingLabelInput>
    <FloatingLabelInput class="col-span-full" clearable id="clearable_standard" name="epcc-id" type="text">EPCC ID</FloatingLabelInput>
  </div>
  <div class="flex flex-col gap-2">
    <h3 class="text-xl font-medium">EPCC relationship</h3>
    <ul class="w-full items-center rounded-lg border border-gray-200 ">
      <li class="w-full"><Radio name="hor-list" classes={{ label: "p-3" }}>Student</Radio></li>
      <li class="w-full"><Radio name="hor-list" classes={{ label: "p-3" }}>Faculty / Staff</Radio></li>
      <li class="w-full"><Radio name="hor-list" classes={{ label: "p-3" }}>Public</Radio></li>
    </ul>
  </div>
</div>
