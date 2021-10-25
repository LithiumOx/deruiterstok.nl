<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import Logo from '../../assets/Logo.svg';
	onMount(() => {
		const btn = document.querySelector('button.mobile-menu-button');
		const menu = document.querySelector('.mobile-menu');

		// add event listeners
		btn.addEventListener('click', () => {
			menu.classList.toggle('hidden');
		});
	});
</script>

<!-- content goes here -->
<div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box justify-between">
	<a href="/dev" class="flex px-2 mx-2 no-underline">
		<img class="h-12 w-12" src={Logo} alt="" />
		<span class="text-lg text-base-content font-bold no-underline"> De Ruiterstok </span>
	</a>
	<div class="flex-none hidden px-2 mx-2 lg:flex">
		<div class="flex items-stretch">
			<a sveltekit:prefetch href="/dev" class="btn btn-ghost btn-md rounded-btn no-underline">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="inline-block w-5 mr-2 stroke-current"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
					/>
				</svg>
				Home
			</a>
			<a
				sveltekit:prefetch
				href="/dev/huisregels"
				class="btn btn-ghost btn-md rounded-btn text-center no-underline"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="inline-block w-5 mr-2 stroke-current"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
				</svg>
				Huisregels
			</a>
			<a
				sveltekit:prefetch
				href="/dev/nieuws"
				class="btn btn-ghost btn-md rounded-btn no-underline"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="inline-block w-5 mr-2 stroke-current"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
					/>
				</svg>
				Nieuws
			</a>
			<a
				sveltekit:prefetch
				href="/dev/over-ons"
				class="btn btn-ghost btn-md rounded-btn no-underline"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="inline-block w-5 mr-2 stroke-current"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				Over ons
			</a>
		</div>
	</div>

	<div class="flex-none dropdown dropdown-end lg:hidden">
		<div tabindex="0" class="btn btn-ghost rounded-btn">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-6 h-6 stroke-current"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</div>
		<ul
			tabindex="0"
			class="shadow menu dropdown-content bg-base-100 rounded-box w-52 items-center mt-80"
		>
			<li class="mt-2">
				<a href="/dev" class="btn btn-ghost btn-md rounded-btn no-underline">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="inline-block w-5 mr-2 stroke-current"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
						/>
					</svg>
					Home
				</a>
			</li>
			<li class="mt-2">
				<a
					sveltekit:prefetch
					href="/dev/huisregels"
					class="btn btn-ghost btn-md rounded-btn no-underline"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="inline-block w-5 mr-2 stroke-current"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
					</svg>
					Huisregels
				</a>
			</li>
			<li class="mt-2">
				<a
					sveltekit:prefetch
					href="/dev/nieuws"
					class="btn btn-ghost btn-md rounded-btn no-underline"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="inline-block w-5 mr-2 stroke-current"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
						/>
					</svg>
					Nieuws
				</a>
			</li>
			<li class="mb-2">
				<a
					sveltekit:prefetch
					href="/dev/over-ons"
					class="btn btn-ghost btn-md rounded-btn no-underline"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="inline-block w-5 mr-2 stroke-current"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					Over ons
				</a>
			</li>
		</ul>
	</div>
</div>
