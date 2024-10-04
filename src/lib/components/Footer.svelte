<script>
	import Email from '$lib/components/Email.svelte';
</script>

<div class="bg-neutral-800 px-4 py-8 text-white md:p-20">
	<div class="container mx-auto mx-auto w-full xl:w-2/3">
		<article id="application">
			<section class="flex flex-col gap-4">
				<h3
					class="pb-2 text-center font-alegreya text-4xl font-bold uppercase tracking-wider text-accent"
				>
					Printable Application
				</h3>
				<img
					src="img/application-qr.png"
					alt="Application QR code"
					class="mx-auto max-w-[250px] rounded"
				/>
				<p>
					To apply for membership,
					<a href="odd_fellows_membership_application.pdf"> fill out the application </a>. You can
					email a pdf to us or print it out and drop it off/mail it to our lodge!
				</p>
				<p>
					Email: <Email />
				</p>
				<p>Snail mail: 1706 NW Market St, Seattle, WA 98107</p>
			</section>
		</article>
		<section class="flex flex-col gap-4 py-4 text-lg text-random-purple">
			<p>
				“Every part of this soil is sacred in the estimation of my people. Every hillside, every
				valley, every plain and grove, has been hallowed by some sad or happy event in days long
				vanished.” ~ Chief Seattle,1854
			</p>

			<p>
				Our historic building is housed on the ancestral lands of the Coast Salish Peoples, in
				particular the Duwamish Tribe. To all Coast Salish Peoples we say, "We see you, we respect
				your right to sovereignty and self-determination, and we are committed to being better
				listeners, learners, and in lifting indigenous voices."
			</p>
		</section>
	</div>
</div>
