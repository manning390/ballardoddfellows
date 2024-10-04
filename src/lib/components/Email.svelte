<script lang="ts">
	import cn from '$lib/cn.ts';
	let {
		class: className = '',
		email = 'IOOFBallardAlki170@gmail.com',
		...props
	}: { class: string; email?: string; props?: boolean } = $props();
</script>

<a href={`mailto:${email}`.toLowerCase()} {...props} class={cn(className, 'text-accent')}>
	{email}
</a>
