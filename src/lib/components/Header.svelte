<script lang="ts">
	const links = [
		{
			href: '/',
			name: 'Home'
		},
		{
			href: '/history',
			name: 'History'
		},
		{
			href: '/events',
			name: 'Upcoming Events'
		},
		{
			href: '/rentals',
			name: 'Rentals'
		},
		{
			href: '/contact',
			name: 'Contact Us + How to Join'
		}
	];
</script>

<section
	id="hero"
	class="bg-gray-200 p-4 text-center md:p-20"
>
	<div class="container mx-auto flex flex-col justify-center gap-4 md:gap-20 ">
		<img src="img/banner.jpg" alt="Odd Fellows Banner" class="w-full rounded bg-white p-2" />
		<a href="/" class="hover:no-underline">
			<h1 class="font-alegreya md:text-6xl text-3xl text-accent">Ballard Odd Fellows</h1>
		</a>
	</div>
</section>
<nav>
	<ul class="flex list-none flex-col items-center justify-center gap-4 py-4 md:flex-row md:pb-8">
		{#each links as link}
			<li>
				<a href={link.href} class="font-alegreya-sans uppercase tracking-wide text-zinc-500">
					{link.name}
				</a>
			</li>
		{/each}
	</ul>
</nav>
