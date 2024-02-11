import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const fileLoc = path.join(process.cwd(), "data", "events.json");
  const fileContent = fs.readFileSync(fileLoc, "utf-8");
  const jsonContent = JSON.parse(fileContent);
  try {
    const body = await req.json();
    const title = body.message;
    const date = body.date;
    const event = {
      id: Math.random() * 10,
      title,
      date,
    };
    jsonContent.events.push(event);
    const updatedJsonContent = JSON.stringify(jsonContent, null, 2);
    fs.writeFileSync(fileLoc, updatedJsonContent, "utf-8");
    return NextResponse.json(
      { success: true, message: "events added", data: event },
      {
        status: 201,
      }
    );
  } catch (error: any) {
    console.log("[CALANDER ERROR:] " + error.message);
    return NextResponse.json(
      { success: false, message: "somting want worng" },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  const fileLoc = path.join(process.cwd(), "data", "events.json");
  const fileContent = fs.readFileSync(fileLoc, "utf-8");
  const jsonContent = JSON.parse(fileContent);
  return NextResponse.json(jsonContent.events);
}

export async function DELETE(req: Request) {
  const body = await req.json();
  const id = body.id;
  const fileLoc = path.join(process.cwd(), "data", "events.json");
  const fileContent = fs.readFileSync(fileLoc, "utf-8");
  const jsonContent = JSON.parse(fileContent);

  try {
    jsonContent.events = jsonContent.events.filter((item: any) => {
      return String(item.id) !== String(id);
    });
    const deletedJsonContent = JSON.stringify(jsonContent, null, 2);
    fs.writeFileSync(fileLoc, deletedJsonContent, "utf-8");
    return NextResponse.json(
      { success: true, message: "deleted success!!", id },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "not deleted !!", error },
      { status: 400 }
    );
  }
}
