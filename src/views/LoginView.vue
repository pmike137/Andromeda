<template>
  <div class="min-w-full min-h-full flex justify-center items-center">
    <div
      class="mt-[250px] bg-gray-300 p-4 w-full max-w-sm rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <form class="space-y-6" action="#">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">
          Введите данные для входа
        </h5>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Логин</label
          >
          <input
            type="email"
            name="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="@mail.ru"
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Пароль</label
          >
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          />
        </div>
        <div class="flex items-start">
          <div class="flex items-start">
            <div class="flx items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              />
            </div>
            <label
              for="remember"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Запомнить пароль</label
            >
          </div>
          <a
            href="#"
            class="ml-auto text-sm text-red-700 hover:underline dark:text-blue-500"
            >Забыли пароль?</a
          >
        </div>
        <button
          type="submit"
          class="w-full text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Войти
        </button>
        <!-- <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?
              <a href="#" class="text-blue-700 hover:underline dark:text-blue-500"
                >Create account</a
              >
            </div> -->
      </form>
    </div>
  </div>
</template>
