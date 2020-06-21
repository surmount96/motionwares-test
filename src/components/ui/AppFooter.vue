<template>
    <div class="pt-20 px-20  bg-white">
        <div class="flex flex-wrap py-8 border-t border-gray ">
            <div class="lg:w-3/12 md:w-3/12 w-full">
                <img src="@/assets/images/logo.png" alt="">
            </div>
            <div class="lg:w-3/12 md:w-3/12  mb-4 w-full footer-styling">
                <h5 class="font-bold">MOTIONWARES</h5>
                <p>Our Academy</p>
                <p>Hire a Pro</p>
                <p>Volunteer as a Mentor</p>
                <p>Get Hired</p>
            </div>
            <div class="lg:w-6/12 md:w-8/12 w-full footer-styling">
                <h5 class="font-bold">COMPANY</h5>
                <p>Our Academy FAQs</p>
                <p>Blog</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppFooter"
    }
</script>

<style lang="scss" scoped>
.footer-styling{
    color:var(--text-color);
    font-size: 12px;
    & > h5 {
        margin-bottom: .8rem;
    }
    & > p {
        cursor: pointer;
        &:not(:last-child) {
            margin-bottom: .8rem;
        }
    }
}
</style>