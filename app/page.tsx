import { signIn } from "@/auth"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form
       action={async () => {
         "use server"
         await signIn("twitter")
       }}
      >
        <button type="submit">Signin with Twitter</button>
      </form>
    </main>
  );
}
