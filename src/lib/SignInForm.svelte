<script>
  import {createAccount} from './AW.svelte';

  let id, email, pwd, name;

</script>

<h2>Log In:</h2>

<form action="" class="flex flex-col justify-start">
  <label for="userId">ID: </label>
  <input type="text" name="userId" id="userId" bind:value={id}>
  <label for="email">Email: </label>
  <input type="email" name="email" id="email" bind:value={email}>
  <label for="password">Password: </label>
  <input type="password" name="password" id="password" bind:value={pwd}>
  <label for="name">Name: </label>
  <input type="text" name="name" id="name" bind:value={name}>
  <button type="button" onclick={()=>{createAccount(id, email, pwd, name)}} >Submit</button>
</form>


<style>
  * {
    border: 1px solid black;
  }
</style>