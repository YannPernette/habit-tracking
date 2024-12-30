<script setup lang='ts'>
import type { SanityDocument } from "@sanity/client";

const HOMEPAGE_QUERY = groq`*[_type == "homepage"][0]{...,"testimonies": testimonies[]->{ ... }}`;

const { data: homepage } = await useSanityQuery<SanityDocument>(HOMEPAGE_QUERY);


// SWIPER
const swiperTestimonies = ref(null)
useSwiper(swiperTestimonies, {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
})
</script>


<template>
    <div v-if="homepage" class="homepage">

        <!-- {{ homepage.testimonies }} -->

        <Hero />

        <Functionalities v-bind="homepage.functionalities" />

        <!-- <section class="homepage__functionalities">
            <div class="">
                <h2 v-if="homepage.functionalities.title">{{ homepage.functionalities.title }}</h2>
                <p v-if="homepage.functionalities.text">{{ homepage.functionalities.text }}</p>
            </div>
            <ul v-if="homepage.functionalities.elements" class="">
                <li v-for="(element, index) in homepage.functionalities.elements" :key="index">
                    <Functionality v-bind="element" />
                </li>
            </ul>
        </section> -->
        <Quote v-bind="homepage" />

        <ClientOnly>
            <div class="testimonies">
                <ul>
                    <swiper-container ref="swiperTestimonies" :init="false">
                        <swiper-slide v-for="(testimony, index) in homepage.testimonies" :key="index">
                            <li>
                                <Testimony v-bind="testimony" />
                            </li>
                        </swiper-slide>
                    </swiper-container>
                </ul>
                <div class="swiper-button-next"><ArrowRight /></div>
                <div class="swiper-button-prev"><ArrowLeft /></div>
                <div class="swiper-pagination" />
            </div>
        </ClientOnly>
    </div>
</template>


<style lang='scss'>
.homepage {
    margin-top: 150px;
}

.testimonies {
    position: relative;
    margin-inline: 30%;

    .swiper-button-next {
        position: absolute;
        top: 0;
        right: -15%;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }

    .swiper-button-prev {
        position: absolute;
        top: 0;
        left: -15%;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
}
</style>