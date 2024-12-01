<script lang="ts">
  import * as Resizable from "$lib/components/ui/resizable/index.js";
  // class="max-w-md rounded-lg border"
</script>

<Resizable.PaneGroup
  direction="horizontal"
  class="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105"
>
  <Resizable.Pane defaultSize={40}>
    <div class="flex h-[200px] flex-col items-center justify-center gap-2 p-6">
      <span class="font-semibold">Notes</span>
      <span class="text-sm text-muted-foreground">Organize your thoughts</span>
    </div>
  </Resizable.Pane>
  <Resizable.Handle />
  <Resizable.Pane defaultSize={60}>
    <Resizable.PaneGroup direction="vertical">
      <Resizable.Pane defaultSize={60}>
        <div class="flex h-full flex-col items-center justify-center gap-2 p-6">
          <span class="font-semibold">Knowledge Base</span>
          <span class="text-sm text-muted-foreground">Build your digital library</span>
        </div>
      </Resizable.Pane>
      <Resizable.Handle />
      <Resizable.Pane defaultSize={40}>
        <div class="flex h-full flex-col items-center justify-center gap-2 p-6">
          <span class="font-semibold">Tasks</span>
          <span class="text-sm text-muted-foreground">Track your progress</span>
        </div>
      </Resizable.Pane>
    </Resizable.PaneGroup>
  </Resizable.Pane>
</Resizable.PaneGroup>
