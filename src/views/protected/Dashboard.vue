<template>
    <div class="dashboard">
        <div class="">
            <app-navbar />
        </div>
        <div class="lg:w-11/12 md:w-11/12 mx-auto">
            <div class="flex flex-wrap p-3 pt-20">
                <div class="lg:w-3/12 w-full mb-3">
                    <aside class="sidebar shadow p-4 lg:mr-6 md:mr-6 bg-white">
                        <div class="flex justify-center">
                            <div class="img-circle" :style="{'background-image': 'url(\''+ image + '\')'} ">
                            </div>
                        </div>
                        <p class="mt-3 text-center text-styling">Ayanwoye Ayodeji</p>
                        <div class="mt-3 mb-20">
                            <h3 class="heading-secondary">Education</h3>
                            <p class="text-styling">Obafemi Awolowo University</p>
                            <p class="text-styling">
                                Bachelors Degree in Engineering Physics
                            </p>
                        </div>
                    </aside>
                </div>
                <div class="lg:w-9/12 w-full">
                    <div class="lg:mb-0 md:mb-0 mb-3 shadow px-4 py-8 bg-white">
                        <h2 class="heading-primary">About</h2>
                        <div class="text-styling">
                            <p>
                                I am a Software Engineer based in Lokogoma, FCT - Abuja with 1 - 3 Years of experience.
                            </p>
                            <p> I am available for Remote Full Time jobs</p>
                            <p>I am a professional web developer with strong background knowledge of my skill sets.</p>
                        </div>
                    </div>

                    <div class="shadow px-6 py-8 mt-6 bg-white">
                        <h2 class="heading-primary mb-3">Work Experience</h2>
                        <div class="text-styling mb-6" v-for="exp in experience" :key="exp.id">
                            <h4 class="heading-secondary red" >{{ exp.job_title }}</h4>
                            <p>{{ exp.company }}</p>
                            <p>{{ exp.date }}</p>
                            <p>{{ exp.address }}</p>
                            <ul class="list-style" v-for="fn in exp.functions" :key="fn.id">
                                <li>{{ fn }}</li>
                            </ul>
                        </div>
                    </div>

                    <div class="shadow px-6 py-8 mt-6 bg-white">
                        <h3 class="heading-secondary">Skills</h3>
                        <div class="text-styling mt-4">
                            <button v-for="skill in skills" :key="skill.id" class="border border-gray px-10 py-2 mr-2 mt-2 rounded-full">{{ skill.name }}</button>
                        </div>
                    </div>

                    <div class=" mt-4 shadow px-4 py-8 bg-white">
                        <h2 class="heading-primary">Projects</h2>
                            <p class="heading-secondary">
                                Bookings Africa project.</p>
                        <p class="text-styling"> Built with gridsome and vuejs. Uses bulma and tailwind for the css architecture.
                            <a href="https://beta.bookingsafrica.com" class="link">link</a></p>
                        <div class="text-styling">
                            <button class="border btn-color border-gray px-10 py-2 mr-2 mt-2 " v-for="project in projects" :key="project.id">{{ project.name }}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-5">
            <app-footer />
        </div>
    </div>
</template>

<script>
    import AppNavbar from "../../components/ui/AppNavbar";
    import AppFooter from "../../components/ui/AppFooter";

    export default {
        name: "Dashboard",
        components: { AppFooter, AppNavbar },
        data() {
            return {
                image: require('../../assets/images/3.jpg'),
                projects: [
                    { name: 'Html'},
                    { name: 'Css' },
                    { name: 'Javascript' },
                    { name: 'jQuery' },
                    { name: 'Vue' },
                    { name: 'Version Control' },
                ],
                experience: [
                    {
                        job_title: 'Software developer (Full time)',
                        company: 'Raadaa partner international',
                        date: '9th Dec 2019 till date',
                        address: 'Utako Abuja',
                        functions: [
                            'Use of git & gitlab version control to manage web application and collaborate with other developers.',
                            'Building optimized & mobile responsive website with Html, Css, vuejs, & laravel',
                            'Use of relational database & database normalization rule to improve data integrity. Building restful APIs'
                        ]
                    },
                    {
                        job_title: 'Frontend web developer (Contract)',
                        company: 'Bookings Africa',
                        date: '23rd Apr 2020 - 11th Jun 2020',
                        address: 'Lagos',
                        functions: [
                            'Use of git & bitbucket version control to manage web application and collaborate with other developers.',
                            'Use of figma and conversion of those designs into web applications.',
                            'Use of vue, vuex and gridsome for (SEO, dynamic & static) applications.',
                            'Use of docker to containerize and build our application.',
                            'Integration of payment gateway and video call.'
                        ]
                    },
                    {
                        job_title: 'Fullstack web developer(Full time)\n',
                        company: 'Nano Technology',
                        date: '23rd Sep 2019 - 30th Nov 2019',
                        address: 'Ikeja Lagos',
                        functions: [
                            'Tasked to make use of content management system in building web applications.'
                        ]
                    }
                ],
                skills: [
                    { name: 'Html' },
                    { name: 'Css' },
                    { name: 'Javascript' },
                    { name: 'jQuery' },
                    { name: 'Vue' },
                    { name: 'Version Control' },
                    { name: 'PHP' },
                    { name: 'Laravel' },
                    { name: 'Figma' },
                    { name: 'MYSQL' },
                    { name: 'PostgreSQL' },
                    { name: 'Search Engine Optimization' },
                    { name: 'Flutter' },
                ]
            };
        },
    }
</script>

<style scoped>
.dashboard{
    background-color: var(--color-secondary);
}
.img-circle{
    height:7rem;
    width:7rem;
    border-radius: 50%;
    overflow: hidden;
    background-size: cover;

}
.heading-primary{
    font-weight: 900;
    font-size: 16px;
    color:var(--color-primary);
}
.heading-secondary{
    font-weight: 600;
    font-size: 14px;
    color:var(--color-primary);
}
.text-styling{
    font-size: 14px;
    color:#626464
}
.list-style{
    list-style: disc;
    padding-left: 1rem;
}
.btn-color{
    background-color: #999;
    color:#fff;
}
.red{
    color:var(--logo-color);
}
.link{
    color:blue;
}
</style>