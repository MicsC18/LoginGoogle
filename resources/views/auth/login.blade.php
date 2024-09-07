<x-guest-layout>
    <x-authentication-card>
        <x-slot name="logo">
            <x-authentication-card-logo />
        </x-slot>
         <h2 class="text-center text-xl font-semibold text-gray-700 mt-4">
            Inicia sesión para continuar
        </h2>


        <x-validation-errors class="mb-4" />

        @session('status')
            <div class="mb-4 font-medium text-sm text-green-600">
                {{ $value }}
            </div>
        @endsession

        <form method="POST" action="{{ route('login') }}">
            @csrf

            <div>
                <x-label for="email" value="{{ __('Email') }}" />
                <x-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" />
            </div>

            <div class="mt-4">
                <x-label for="password" value="{{ __('Contraseña') }}" />
                <x-input id="password" class="block mt-1 w-full" type="password" name="password" required autocomplete="current-password" />
            </div>

             <div class="mt-2 text-right">
                @if (Route::has('password.request'))
                    <a class="underline text-sm text-blue-600 hover:text-blue-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="{{ route('password.request') }}">
                        {{ __('¿Olvidaste tu contraseña?') }}
                    </a>
                @endif
            </div>

            <div class="block mt-4">
                <label for="remember_me" class="flex items-center">
                    <x-checkbox id="remember_me" name="remember" />
                    <span class="ms-2 text-sm text-gray-600">{{ __('Remember me') }}</span>
                </label>
            </div><br></br>
            <div>
                <x-button class="w-full text-center !bg-orange-200">
                    {{ __('Iniciar Sesión') }}
                </x-button>
            </div>
            
        </form>

    </x-authentication-card>

     <!-- Botón de Google centrado y con margen superior ajustado -->
        <div class="mt-6 flex justify-center">
            <a href="login-google">
                <x-button class="flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg space-x-2">
                    <!-- Ícono de Google en SVG -->
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                        <path fill="#EA4335" d="M24 9.5c3.84 0 6.45 1.65 7.93 3.04l5.77-5.77C33.38 3.73 28.93 2 24 2 14.73 2 7.19 7.85 4.36 15.58l6.97 5.42C13.18 15.07 18.04 9.5 24 9.5z"/>
                        <path fill="#4285F4" d="M46.5 24.5c0-1.78-.14-3.09-.43-4.45H24v8.44h13.3c-.27 2.19-1.74 5.48-5.03 7.68l7.73 5.99C43.7 37.58 46.5 31.55 46.5 24.5z"/>
                        <path fill="#FBBC05" d="M11.33 28.23c-.89 2.19-2.3 4.05-4.15 5.43l-6.97-5.42C3.82 36.17 10.74 42 19 42c4.83 0 9.38-1.65 12.6-4.5l-7.73-5.99c-2.24 1.49-5.09 2.49-8.26 2.49-6.35 0-11.73-4.27-13.63-10.28z"/>
                        <path fill="#34A853" d="M24 46c6.56 0 12.05-2.17 16.06-5.91l-7.73-5.99c-2.07 1.47-4.78 2.39-8.33 2.39-6.34 0-11.7-4.25-13.6-10.23l-6.97 5.42C7.19 40.15 14.73 46 24 46z"/>
                    </svg>
                    <span>Iniciar Sesión con Google</span>
                </x-button>
            </a>
        </div>

      <br></br>
      <p class="text-center text-gray-500 text-xs mt-4">
         &copy;2024 Acme Corp. All rights reserved.
      </p>

  
</x-guest-layout>
