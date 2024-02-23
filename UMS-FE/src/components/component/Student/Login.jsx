/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Eu9J1nsjip4
 */
//import Link from "next/link"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="absolute top-5 right-12 h-16 w-16 ...">
        <XIcon className="w-10 h-20 " />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <Card className="mt-100 w-[420px] h-[400px]">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full gap-4">
                <div className="flex flex-col space-y-4">
                  <label className="font-bold">Email</label>
                  <Input placeholder="Enter Email" type="email" />
                </div>
                <div className="flex flex-col space-y-4">
                  <label className="font-bold">Password</label>
                  <Input placeholder="Enter Password" type="password" />
                </div>
                <div className="flex justify-between space-y-4">
                  <Link to="/pswdreset" className="text-blue-500 underline">
                    Forgot password?
                  </Link>
                </div>
                <Button className="space-y-4">Log in</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      opacity="0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
