<script lang="ts">
	import Email from '$lib/components/Email.svelte';
	import EventCopy from '$lib/components/EventCopy.svelte';
	const facebook = 'https://www.facebook.com/Ballard-Alki-Odd-Fellows-Lodge-117716201587859';
	const tenants = [
		{
			name: 'Rentals',
			href: '/rentals',
			img: 'img/building.jpg',
			alt: 'building from street',
			p: 'Our historic purpose-built community center can be rented for regular meetings or one-time events.'
		},
		{
			name: 'Fraternity',
			href: 'img/events',
			img: 'img/neon.jpg',
			alt: 'neon odd fellows lodge sign',
			p: 'Fraternity is a means to improve and elevate the character of humanity. Our building provides a home for several Odd Fellows-related and other fraternal organizations.'
		},
		{
			name: 'History',
			href: '/history',
			img: 'img/block-print.jpg',
			alt: 'block print',
			p: 'Odd Fellowship draws from a rich legacy of volunteerism, intentional compassion and mutual aid.'
		}
	];
</script>

<img src="img/decoration.jpg" alt="Banner Decoration" class="mx-auto hidden pb-5 pt-20 md:block" />
<article
	id="tenants"
	class="container mx-auto mx-auto flex flex-col justify-between gap-8 p-4 pb-8 md:flex-row"
>
	{#each tenants as tenant}
		<section class="flex flex-1 flex-col gap-4 rounded p-3">
			<a href={tenant.href}>
				<h2 class="text-center">{tenant.name}</h2>
			</a>
			<img src={tenant.img} alt={tenant.alt} class="mx-auto max-h-[230px] rounded" />
			<p>{tenant.p}</p>
		</section>
	{/each}
</article>
<div class="bg-neutral-800 px-4 py-8 text-white md:p-20">
	<div class="container mx-auto mx-auto w-full xl:w-2/3">
		<article id="events" class="flex flex-col gap-4">
			<EventCopy header="1st Thursday Movie Night">
				<p>
					Odd Fellows Movie Night is an opportunity to gather with your lodge brothers and sisters,
					invite your friends and family and enjoy a great movie!
				</p>
				<p>
					Email us at <Email />
					or visit us on
					<a href={facebook}>Facebook</a>
					for this month's feature
				</p>
				<p>Social time at 7:00pm</p>
				<p>Film at 7:30pm</p>
				<p>
					We can't advertise the film under our screening license, but it will always be a classic!
					We are exploring the themes of Friendship, Love and Truth.
				</p>
			</EventCopy>
			<EventCopy header="Ballard Night Out 3rd Thursdays">
				<p>
					Participatory art projects, movies, or presentations. Open to the public! Social time at
					7pm, Art starts at 7:30pm
				</p>
				<p>
					Email us at <Email />
					or visit us on
					<a href={facebook}>Facebook</a>
					for the Zoom link
				</p>
				<p>Social time 7:00pm</p>
				<p></p>
				<p>Art starts at 7:30pm</p>
			</EventCopy>
			<EventCopy header="Big Tent Lodge">
				<p>
					Every 5th Thursday we host a special event! This month, it's a screening of the
					documentary Join or Die - Robert Putnam's look at civic engagement, and why it's
					absolutely vital, now more than ever! This film is thoughtful, fascinating, and very
					informative! It premiered at SXSW last year to rave reviews and we're super excited to be
					able to bring it to Seattle!
				</p>
				<p>
					<a href="https://www.joinordiefilm.com/"> www.joinordiefilm.com </a>
				</p>
				<p>Thursday May 30, Doors at 7pm, Film at 7:30pm</p>
				<p>Suggested donation $10</p>
			</EventCopy>
		</article>
	</div>
</div>
