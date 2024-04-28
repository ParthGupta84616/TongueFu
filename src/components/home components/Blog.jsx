import React from 'react'
import Container from './Container'
import Blog_1pre from "../../assets/Blog_1pre.png"
import Blog_2 from "../../assets/Blog_2.png"
import Blog_3 from "../../assets/Blog_3.png"
function Blog() {
  return (
    <div id="blog"  className='mt-4'>
  <Container>
      <div class="mb-12 space-y-2 text-center">
        <h2 class="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Latest Articles</h2>
        <p class="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
        Speak with Confidence: A Step by step guide to overcome your Stammering Battle!! Check out TongueFu Exclusive Resources.
        </p>
      </div>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div class="relative overflow-hidden rounded-xl">
            <img src={Blog_1pre}
            alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
          </div>
          <div class="mt-6 relative">
            <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
              Intro to Stammering
            </h3>
            <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
            Have you ever gotten stuck on a word, feeling the pressure build as the sound refuses to come out?...
            </p>
            <a class="inline-block" href="#">
              <span class="text-info dark:text-blue-300">Read more</span>
            </a>
          </div>
          
        </div>
        <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div class="relative overflow-hidden rounded-xl">
            <img src={Blog_2}
            alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
          </div>
          <div class="mt-6 relative">
            <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
            10 Interesting Facts About Stammering and Stuttering
            </h3>
            <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
              Unraveling the Mystery: What You Didn't Know About Stammering...
            </p>
            <a class="inline-block" href="#">
              <span class="text-info dark:text-blue-300">Read more</span>
            </a>
          </div>
          
        </div>
        <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div class="relative overflow-hidden rounded-xl">
            <img src={Blog_3}
            alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
          </div>
          <div class="mt-6 relative">
            <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
            Intro to Deep Breathing
            </h3>
            <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
            Feeling anxious or stressed? Stop for a moment, and take a slow deep breath....
            </p>
            <a class="inline-block" href="#">
              <span class="text-info dark:text-blue-300">Read more</span>
            </a>
          </div>
          
        </div>
      </div>
  </Container>
</div>
  )
}

export default Blog