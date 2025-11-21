<script>
    import { Card } from "flowbite-svelte";
    import { UserAddOutline, UserOutline } from "flowbite-svelte-icons";

</script>

<main>
    <div class="grid grid-cols-2 gap-x-3 gap-y-8 mb-30">
        <h1 class="col-span-2 text-center font-bold text-2xl">Welcome to the EPCC Makerspace!</h1>
        <Card href="/"class="p-4 sm:p-6 md:p-8">
            <UserAddOutline class="h-8 w-8" />
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">New to the Makerspace?</h5>
            <p class="text-sky-600">Register here</p>
        </Card>
        <Card href="/" class="p-4 sm:p-6 md:p-8 ">
            <UserOutline class="h-8 w-8" />
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Coming Back?</h5>
            <p class="text-sky-600">Sign in</p>
        </Card>
    </div>
</main>