<template>
    <div class="signup lg:pt-16 md:pt-16">
        <div class="lg:w-7/12 md:w-7/12 mx-auto w-full bg-white shadow rounded height">
            <h1 class="login-heading pt-16 px-16">SIGNUP</h1>
            <form action="" class="rounded">
                <div class="px-16">
                    <div class="mt-10">
                        <input type="text" placeholder="FULL NAME" class="pb-4 pl-1 focus:outline-none border-b border-gray w-full" >
                    </div>
                    <div class="mt-10">
                        <input type="email" placeholder="EMAIL" class="pb-4 focus:outline-none pl-1 border-b border-gray w-full" >
                    </div>
                    <div class="mt-10">
                        <input type="email" placeholder="PASSWORD" class="pb-4 focus:outline-none pl-1 border-b border-gray w-full" >
                    </div>
                    <div class="py-6">
                        <router-link to="" tag="p" class="text-center cursor-pointer">FORGOT PASSWORD</router-link>
                    </div>
                </div>
                <div class="">
                    <div class="flex flex-wrap text-white lg:px-0 md:px-0 px-16">
                        <div class="w-1/2 ">
                            <div class="bg-gray">
                                <router-link to="/dashboard" tag="button" class=" text-left focus:outline-none pl-4  py-6">LOGIN</router-link>
                            </div>

                        </div>
                        <div class="w-1/2 ">
                            <div class="bg-dark flex justify-end">
                                <router-link to="/dashboard" tag="button" class="block pr-4 focus:outline-none py-6">SIGNUP</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Signup"
    }
</script>

<style lang="scss" scoped>
.signup{
    background-image: linear-gradient(to right, rgba(0,0,0,.4), rgba(0,0,0,.4)),
    url("../../assets/images/floating-cogs.svg");
    height: 100vh;
}
.login-heading{
    font-size: 25px;
    color: var(--text-color);
    letter-spacing: 2px;
}
.rounded{
    border-radius: 10px;
}
.bg-gray{
    background-color: var(--color-secondary);
    color:#999;
    font-weight: 700;
    letter-spacing: 1px;
    border-bottom-left-radius: 10px;
    & > button{
        display: block;
        width: 100%;
        text-align: left;
    }
}
.bg-dark{
    background-color: var(--color-primary);
    letter-spacing: 1px;
    border-bottom-right-radius: 10px;
    & > button{
        display: block;
        width: 100%;
        text-align: right;
      }
}
.height{
    height: 76.5vh;
}
@media screen and (max-width: 767px) {
    .height{
        height: 100vh;
    }
    .rounded{
        border-radius: unset;
    }
    .bg-dark{
        border-bottom-right-radius: unset;
    }
    .bg-gray{
        border-bottom-left-radius: unset;
    }
}
</style>