import { NextRequest, NextResponse } from "next/server";

export async function POST( req: NextRequest){
    try {
        const inputData = await req.json();
        const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID || "d6d5c955a0";
        const API_KEY = process.env.MAILCHIMP_API_KEY || "b3abdb1cb0f5cd67591aaab69ef55b09-us22";
        const DATACENTER = process.env.MAILCHIMP_API_SERVER || "us22";
        const data = {
            email_address: inputData.email,
            status: 'subscribed',
        };
        const response = await fetch(
            `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
    
            {
            body: JSON.stringify(data),
            headers: {
                Authorization: `apikey ${API_KEY}`,
                'Content-Type': 'application/json',
            },
            method: 'POST',
            }
        );
        if (response.status >= 400) {
            throw new Error("Error");
        }
        return NextResponse.json({
            status: true,
            message: "success",
        });
    } catch ({name, message}:any) {
        return NextResponse.json({
            status: false,
            message: message,
        });
    }
}