<script lang="ts">
    import { Motion } from 'svelte-motion';
    import type { Section } from '../types';

    interface Props {
        section: Section;
        index: number;
    }

    let { section, index }: Props = $props();

    let isHovered = $state(false)
</script>

<Motion
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    let:motion
>
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
            use:motion
            class="group relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/50 p-8 transition-all hover:border-primary/20 hover:shadow-lg dark:border-slate-800 dark:from-slate-900 dark:to-slate-900/50 dark:hover:border-primary/40"
            onmouseenter={() => (isHovered = true)}
            onmouseleave={() => (isHovered = false)}
    >
            <!-- Background Gradient Animation -->
            <div
                class="absolute inset-0 -z-10 bg-gradient-to-b from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    ></div>

            <!-- Content -->
            <div class="relative z-10 h-full space-y-4">
                <h3 class="text-2xl font-bold tracking-tight text-primary">{section.title}</h3>
                <p class="text-muted-foreground">{section.content}</p>

                <!-- Decorative Elements -->
                <div
                    class="absolute bottom-0 right-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/10 group-hover:blur-2xl"
    ></div>
                <div
                    class="absolute right-4 top-4 h-20 w-20 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10"
    ></div>
            </div>
        </div>
</Motion>
