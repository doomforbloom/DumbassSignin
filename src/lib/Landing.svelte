<script>
    import {FloatingLabelInput, Button } from "flowbite-svelte";
</script>

<main class="flex flex-col gap-4 border-gray-500 border-2 rounded-lg p-7">
    <div class="flex flex-col gap-2">
        <h1 class="text-2xl font-semibold">Welcome Back!</h1>
        <h2 class="">Log into your Makerspace Account</h2>
    </div>
    <div class="grid grid-rows-2 gap-5 mb-4">
        <FloatingLabelInput class="col-span-full" clearable name="Email" type="text">Email</FloatingLabelInput>
        <FloatingLabelInput class="col-span-full" clearable name="epcc-id" type="text">EPCC ID</FloatingLabelInput>
    </div>
    <div class="flex flex-col gap-2">
        <Button class="py-4" color="primary">Sign In</Button>
        <Button class="py-3" outline>Don't have an account?</Button>
    </div>
</main>