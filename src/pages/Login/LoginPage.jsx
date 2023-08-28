import React from 'react'

export default function LoginPage() {
  return (
    <main className="flex min-h-screen">
      <div className="left flex-1 flex justify-center items-center relative">
        <img
          className="absolute left-8 top-8"
          src="/img/icons/logo.svg"
          alt="logo"
        />
        <div className="login-form font-poppins w-90 md:w-2/5 lg:w-1/2">
          <h3 className="text-4xl font-bold mb-2">Connexion</h3>
          <p className="text-xs text-gray-500">
            Welcome back! please enter your details
          </p>
          <form className="flex flex-col my-4 p-1" action="#login">
            <div className="p-1 mb-2">
              <label className="text-xs font-bold mb-1" htmlFor="username">
                Email
              </label>
              <input
                className="block
                w-full
                border-2
                border-gray_c2
                p-3 rounded
                text-xs"
                name="username"
                placeholder="example@example.com"
                type="text"
              />
            </div>
            <div className="p-1 mb-2">
              <div className="flex space-between mb-1 text-xs font-bold">
                <label htmlFor="password">Mot de passe</label>
                <a
                  className="
                    text-right
                    text-yellow_c1
                    underline
                    underline-offset-2
                  "
                  href="#forget_password"
                >
                  Mot de passe oublié ?
                </a>
              </div>
              <input
                className="
                  block
                  w-full
                  border-2
                  border-gray_c2
                  p-3
                  rounded
                  text-xs
                "
                name="password"
                placeholder="**********************"
                type="password"
              />
            </div>
            <button
              className={
                'bg-gray_c4 ' +
                'text-white ' +
                'rounded-lg ' +
                'mt-4 ' +
                'p-2 ' +
                'shadow-lg ' +
                'hover:bg-gray_c5 ' +
                'active:scale-105 ' +
                'transition-transform'
              }
            >
              Connexion
            </button>
          </form>
          <p className="text-xs font-bold">
            Pas de compte ?{' '}
            <a
              className="text-yellow_c1 underline underline-offset-2"
              href="/signup"
            >
              S&apos;inscrire
            </a>
          </p>
        </div>
      </div>
      <div className="hidden lg:block flex-1 right">
        <img
          className="
            max-h-screen
            w-full
            object-cover
            border-l-2
            border-gray-100
          "
          src="/img/pizza.png"
          alt="pizza-bg"
        />
      </div>
    </main>
  )
}
