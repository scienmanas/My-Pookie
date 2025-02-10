import { NextResponse } from "next/server";
import prisma from "@/prisma/index";
import nodemailer from "nodemailer";

const PORT: number = 465;

// Helper function to format date and time nicely
function formatMeeting(
  dateStr: string,
  timeStr: string,
  place: string
): string {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [year, month, day] = dateStr.split("-");
  const monthName = months[parseInt(month, 10) - 1] || "";
  const dayNumber = parseInt(day, 10);
  const [hourStr, minuteStr] = timeStr.split(":");
  let hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);
  const ampm = hour >= 12 ? "pm" : "am";
  hour = hour % 12;
  if (hour === 0) hour = 12;
  const formattedTime =
    minute === 0 ? `${hour}${ampm}` : `${hour}:${minuteStr}${ampm}`;
  return `${monthName} ${dayNumber}, ${year}, ${formattedTime} at ${place}`;
}

export async function POST(req: any) {
  try {
    const body = await req.json();
    const { date, time, place, userId, message } = body;

    // Get user email
    let user = undefined;
    try {
      user = await prisma.user.findUnique({
        where: { id: userId },
        select: { email: true },
      });
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500 }
      );
    }

    // If user not found, return 404
    if (!user)
      return NextResponse.json("User email not found", { status: 404 });

    // Format the meeting details in a nice way
    const meetingDetails = formatMeeting(date, time, place);

    // Construct a friendly and polished email message including your personal note.
    const emailBody = `Hello 😊,\n\nYour meeting has been confirmed for: ${meetingDetails}. You pookie/friend shared the following message with you:"${message}"\n\nLooking forward to crafting beautiful memories of you two together!\n\n--\nBest regards,\nMy Pookie`;

    // Send the email using the sendMail function
    await sendMail({
      fromName: "My Pookie",
      toEmail: user.email,
      subject: "Meeting Confirmation 🎉",
      message: emailBody,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Send mail function
async function sendMail({
  fromName = "",
  toName = "",
  toEmail,
  subject,
  message,
}: {
  fromName: string;
  toName?: string;
  toEmail: string;
  subject: string;
  message: string;
}): Promise<void> {
  const EMAIL = process.env.ADMIN_EMAIL;
  const PASSWORD = process.env.ADMIN_APP_PASSWORD;

  if (!EMAIL || !PASSWORD) {
    throw new Error(
      "Email credentials are not set in the environment variables."
    );
  }

  // Create transporter using Gmail's SMTP settings
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });

  // Mail options
  const mailOptions: nodemailer.SendMailOptions = {
    from: `${fromName} <${EMAIL}>`,
    to: `${toName} <${toEmail}>`,
    subject: subject,
    text: message,
  };

  // Send the mail
  await transporter.sendMail(mailOptions);
}
