<script lang="ts">
  import { Input, Label, Button, Alert } from "flowbite-svelte";
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

<div class="border-2 rounded-xl mt-2 mb-2">
  <form class="p-8">
    <div class="mb-6 grid gap-6 md:grid-cols-2">
      <div>
        <Label for="first_name" class="mb-2">Full name</Label>
        <Input
          type="text"
          id="first_name"
          placeholder="John"
          required
          bind:value={name}
        />
      </div>
      <div>
        <Label for="epcc_id" class="mb-2">ID</Label>
        <Input
          type="text"
          id="epcc_id"
          placeholder="123456789"
          required
          bind:value={epcc_id}
        />
      </div>
    </div>
    <div class="mb-6">
      <Label for="email" class="mb-2">Email address</Label>
      <Input
        type="email"
        id="email"
        placeholder="john.doe@company.com"
        required
        bind:value={email}
      />
    </div>
    <div class="mb-6">
      <Label for="password" class="mb-2">Password</Label>
      <Input
        type="password"
        id="password"
        placeholder="•••••••••"
        required
        bind:value={password}
      />
    </div>
    <Button
      type="button"
      loading={buttonLoad}
      onclick={() => {
        buttonLoad = true;
        submitError = false;
        createAccount(epcc_id, email, password, name);
        setTimeout(() => {buttonLoad = false}, 800);
      }}>Submit</Button
    >
  </form>
</div>
