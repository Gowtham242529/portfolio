import TextReveal from "@/components/ui/text-reveal";

export default function TechnologiesText({text}) {
  return (
    <div className="z-10 flex min-h-64 items-center justify-center bg-white dark:bg-black">
      <TextReveal text={text} />
    </div>
  );
}
