import CommentSection from "@/components/CommentSection";
import Authentication from "@/components/Authentication";
import CreateCommentSection from "@/components/CreateCommentSection";

export default function Home() {
  return (
    <>
      <header className="w-full bg-neutral-veryLightGray px-4 py-3 sm:px-8 flex justify-end items-center sticky top-0 z-10 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl xl:bg-transparent xl:z-0">
        <Authentication />
      </header>
      <main className="mt-10 px-4 pb-4 w-full flex justify-center">
        <CommentSection />
      </main>
      <footer className="py-4 px-4 sm:px-8 sticky bottom-0 w-full bg-neutral-veryLightGray">
        <div className="bg-background rounded-lg w-full md:max-w-2xl lg:max-w-3xl mx-auto">
          <CreateCommentSection />
        </div>
      </footer>
    </>
  );
}
