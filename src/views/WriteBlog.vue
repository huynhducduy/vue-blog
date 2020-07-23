<template>
  <!--Container-->
  <div class="container w-full md:max-w-3xl mx-auto pt-20 pb-10">
    <!--Subscribe-->
    <div class="container px-4">
      <div class="font-sans bg-white rounded-lg shadow-md p-4 text-center">
        <h2 class="font-bold break-normal text-xl md:text-3xl">
          Write a new blog
        </h2>
        <h3
          class="font-bold break-normal font-normal text-gray-600 text-sm md:text-base"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
        <div class="w-full text-center pt-4">
          <form method="post" action="" enctype="multipart/form-data">
            <div class="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
              <input
                type="text"
                name="title"
                placeholder="Title"
                class="flex-1 mt-4 appearance-none border border-gray-400 rounded shadow-md p-3 text-gray-600 mr-2 focus:outline-none"
              />
            </div>
            <div class="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
              <input
                type="text"
                name="description"
                placeholder="Description"
                class="flex-1 mt-4 appearance-none border border-gray-400 rounded shadow-md p-3 text-gray-600 mr-2 focus:outline-none"
              />
            </div>
            <div class="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
              <input
                type="file"
                name="thumbnail"
                class="flex-1 mt-4 appearance-none border border-gray-400 rounded shadow-md p-3 text-gray-600 mr-2 focus:outline-none"
              />
            </div>
            <div class="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
              <textarea
                name="content"
                style="height: 200px;"
                class="flex-1 mt-4 appearance-none border border-gray-400 rounded shadow-md p-3 text-gray-600 mr-2 focus:outline-none"
              ></textarea>
            </div>
            <div class="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
              <button
                type="submit"
                class="flex-1 mt-4 block md:inline-block appearance-none bg-teal-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-teal-400"
              >
                Write
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- /Subscribe-->
  </div>
  <!--/container-->
</template>
