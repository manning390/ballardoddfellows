<script lang="ts">
	let { header, children = null, ...props } = $props();
</script>

<section class="flex flex-col gap-2">
	<h3
		class="pb-2 text-center font-alegreya text-4xl font-bold uppercase tracking-wider text-accent"
	>
		{header}
	</h3>
	{@render children()}
</section>
