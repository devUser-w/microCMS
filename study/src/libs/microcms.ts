console.log('NEXT_PUBLIC_SERVICE_DOMAIN:', process.env.NEXT_PUBLIC_SERVICE_DOMAIN);

import { createClient } from 'microcms-js-sdk';

// 環境変数にNEXT_PUBLIC_SERVICE_DOMAINが設定されていない場合はエラーを投げる
if (!process.env.NEXT_PUBLIC_SERVICE_DOMAIN) {
    throw new Error('NEXT_PUBLIC_SERVICE_DOMAIN is required');
}

// 環境変数にNEXT_PUBLIC_API_KEYが設定されていない場合はエラーを投げる
if (!process.env.NEXT_PUBLIC_API_KEY) {
    throw new Error('NEXT_PUBLIC_API_KEY is required');
}

// Client SDKの初期化を行う
export const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
});


// export const client = createClient({
//     // serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
//     apiKey: process.env.NEXT_PUBLIC_API_KEY,
// });