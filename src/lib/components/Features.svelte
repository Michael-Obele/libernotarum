<script>
  import { Calendar, TextSearch, ReceiptText, CodeXml } from "lucide-svelte";
  import BentoMarquee from "./bento/BentoMarquee.svelte";
  import BentoCommand from "./bento/BentoCommand.svelte";
  import BentoResizable from "./bento/BentoResizable.svelte";
  import BentoCalendar from "./bento/BentoCalendar.svelte";
  import BentoGrid from "./bento/BentoGrid.svelte";
  import BentoCard from "./bento/BentoCard.svelte";

  let features = [
    {
      Icon: TextSearch,
      name: "Smart Search",
      description: "Find your notes instantly with powerful full-text search capabilities.",
      href: "#features",
      cta: "Try it out",
      background: BentoMarquee,
      class: "col-span-3 lg:col-span-1",
    },
    {
      Icon: ReceiptText,
      name: "Markdown Magic",
      description: "Write in Markdown with live preview, syntax highlighting, and custom themes.",
      href: "#features",
      cta: "Learn more",
      background: BentoCommand,
      class: "col-span-3 lg:col-span-2",
    },
    {
      Icon: CodeXml,
      name: "Code Friendly",
      description: "Perfect for developers with code block highlighting and custom syntax themes.",
      href: "#features",
      cta: "See examples",
      background: BentoResizable,
      class: "col-span-3 lg:col-span-2",
    },
    {
      Icon: Calendar,
      name: "Time Travel",
      description: "Browse and filter your notes by date with our intuitive calendar view.",
      href: "#features",
      cta: "Explore",
      background: BentoCalendar,
      class: "col-span-3 lg:col-span-1",
    },
  ];
</script>

<section class="w-full py-12">
  <div class="container px-4 md:px-6">
    <div class="flex flex-col items-center justify-center space-y-4 text-center">
      <div class="space-y-2">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
          Features that Empower Your Writing
        </h2>
        <p class="max-w-[900px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
          Experience the perfect blend of simplicity and power with our feature-rich markdown editor.
        </p>
      </div>
    </div>
    <div class="mx-auto mt-8 grid w-full max-w-5xl">
      <BentoGrid>
        {#each features as item}
          <BentoCard {...item} />
        {/each}
      </BentoGrid>
    </div>
  </div>
</section>
