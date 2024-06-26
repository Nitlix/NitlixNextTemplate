import { NextRequest, NextResponse } from 'next/server'

import { i18nInjector } from 'nitlix-i18n';
import { themeInjector } from 'nitlix-themes';
import { signalsInjector } from 'nitlix-signals';

import themeSettings from "@/backbone/settings"
import i18nConfig from "@/i18n/config"


export default function middleware(request: NextRequest) {
    // =================================
    // Create a response object
    // =================================
    let response = NextResponse.next({
        request: {
            // Apply old headers
            headers: request.headers,
        }
    })

    // =================================
    // Define interaction functions
    // =================================
    function setHeader(name: string, value: string){
        response.headers.set(name, value);
        request.headers.set(name, value);
    }

    //==================================================
    // Allow server components to access the URL
    //==================================================
    setHeader("x-url", request.url);


    //================================
    // Inject signals
    //================================
    response = signalsInjector(request, response).response;

    

    //================================
    // Inject the theme cookies
    //================================
    response = themeInjector(request, themeSettings, response).response;

    

    //====================
    // Language setting
    //====================
    response = i18nInjector(request, i18nConfig, response).response;

    //===================================
    // Return response to the renderer
    // It'll handle it from here
    //===================================
    return response;
}

export const config = {
    // matcher solution for public, api, assets and _next exclusion
    matcher: "/((?!api|static|.*\\..*|_next).*)",
};