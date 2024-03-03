import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/lib/motion";
import Link from "next/link";

export default function MarketingPage()
{
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <MotionDiv
            className="bg-primary/80 dark:bg-accent/10"
            initial={{
              height: "100px",
              width: "100px",
              borderRadius: "none"
            }}
            animate={{
              height: "5rem",
              width: "5rem",
              borderRadius: "999999px"
            }}
            transition={{
              duration: 0.75,
              ease: "easeInOut",
            }}

          >
            <div />
          </MotionDiv>
          <MotionDiv
            initial={{
              filter: "blur(30px)",
            }}
            animate={{
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.75,
              ease: "easeInOut",
            }}
          >
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                <span className="block text-primary dark:text-primary">
                  Stream Flow
                </span>
              </h1>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none my-4 p-2 text-primary ">
                Ve lo que quieras. Cancela en cualquier tiempo
                {/* Watch Anywhere. Cancel Anytime. */}
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl dark:text-gray-400">
                Disfruta de series, películas y Originales exclusivos en cualquier dispositivo. Streaming ilimitado, sin anuncios, recomendaciones personalizadas.
              </p>
            </div>
            <div className="space-x-4 mt-10 max-w-xl w-full mx-auto">
              <Button size="lg" asChild className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-gray-300">
                <Link
                  href="/inicio"
                >
                  Comienza ahora
                </Link>
              </Button>
            </div>
          </MotionDiv>

        </div>
      </div>
    </section>
  );
}