<script>
    import {FloatingLabelInput, Button } from "flowbite-svelte";
    import { AngleRightOutline } from "flowbite-svelte-icons";
    
</script>

<main>
    <h1>Welcome Back!</h1>
    <div class="grid grid-rows-3 gap-5">
        <FloatingLabelInput class="col-span-full" clearable id="clearable_standard" name="Email" type="text">Email</FloatingLabelInput>
        <FloatingLabelInput class="col-span-full" clearable id="clearable_standard" name="Password" type="text">Password</FloatingLabelInput>
        <Button class="col-span-full" color="primary">Sign In</Button>
    </div>
</main>