import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { Header } from "next/dist/lib/load-custom-routes";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

//GET
// export async function GET(req, res) {
//     const { searchParams } = new URL(req.url);
//     const id = searchParams.get("id");
//     const name = searchParams.get("name");

//     return NextResponse.json({ id: id, name: name });
// }

//POST
export async function POST(req, res) {
    const reqBody = await req.json();
    let name = reqBody["name"];
    let city = reqBody["city"];

    return NextResponse.json({ msg: city });
}

//PUT
export async function PUT(req, res) {
    let reqBody = await req.formData();
    let name = reqBody.get("name");
    let city = reqBody.get("city");
    let country = reqBody.get("country");

    return NextResponse.json({ name: name, city: city, country: country });
}

//GET  //header api key//
// export async function GET(req, res) {
//     const headerList = headers();
//     const apiKey = headerList.get("api-key");

//     return NextResponse.json({ msg: apiKey });
// }

//GET //Cookie//
// export async function GET(req, res) {
//     let token = req.cookies.get("Token")["value"];

//     return NextResponse.json({ msg: token });
// }

//GET //json array
// export async function GET(req, res) {
//     return NextResponse.json(
//         [{ name: "Shahin", age: 26, mail: "shahin@mail.com" }],
//         {
//             status: 200,
//             headers: { token: "abcd", "Set-Cookie": "Auth=123; path=/" },
//              message: "Welcome to our API!",
//             version: "1.0"
//         }
//     );
// }

export async function GET(req, res) {
    redirect("/");
}
