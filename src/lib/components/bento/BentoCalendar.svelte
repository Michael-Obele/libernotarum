<script lang="ts">
  import { getLocalTimeZone, today } from "@internationalized/date";
  import { Calendar } from "$lib/components/ui/calendar/index.js";

  let value = today(getLocalTimeZone());
</script>

<div class="absolute inset-0 flex items-center justify-center">
  <Calendar
    type="single"
    bind:value
    class="mt-12 origin-center rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
  />
</div>