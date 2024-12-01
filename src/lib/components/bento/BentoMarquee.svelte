<script>
  import Marquee from "./Marquee.svelte";
  import { cn } from "$lib/utils";
  const files = [
    {
      name: "notes.md",
      body: "Markdown notes are perfect for organizing thoughts and ideas with simple formatting that's easy to read and write.",
    },
    {
      name: "journal.txt",
      body: "Daily journaling helps capture thoughts, track progress, and reflect on experiences in a structured and meaningful way.",
    },
    {
      name: "tasks.todo",
      body: "Task management is essential for productivity, helping you organize and prioritize your daily activities and long-term goals.",
    },
    {
      name: "ideas.canvas",
      body: "Visual note-taking combines drawings, diagrams, and text to create rich, interconnected maps of your thoughts and concepts.",
    },
    {
      name: "library.index",
      body: "A well-organized digital library makes it easy to find and reference your notes, documents, and research materials.",
    },
  ];
</script>

<Marquee
  pauseOnHover
  class="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
>
  {#each files as f, i}
    <figure
      id={`item-${i}`}
      class={cn(
        "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-950/[.15]",
        "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
      )}
    >
      <div class="flex flex-row items-center gap-2">
        <div class="flex flex-col">
          <figure>
            <figcaption class="text-sm font-medium dark:text-white">
              {f.name}
            </figcaption>
          </figure>
        </div>
      </div>
      <blockquote class="mt-2 text-xs">{f.body}</blockquote>
    </figure>
  {/each}
</Marquee>
