<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import Logo from '../Logo.svg';
	onMount(() => {
		const btn = document.querySelector('button.mobile-menu-button');
		const menu = document.querySelector('.mobile-menu');
		// add event listeners
		// btn.addEventListener('click', () => {
		// 	menu.classList.toggle('hidden');
		// });
	});
</script>

<!-- content goes here -->
<div class="justify-between mb-2.5 shadow-lg navbar bg-neutral text-neutral-content rounded-box">
	<a href="/" class="flex px-2 mx-2 no-underline">
		<img class="w-12 h-12" src={Logo} alt="" />
		<span class="text-lg font-semibold no-underline text-base-content text-middle">
			De Ruiterstok
		</span>
	</a>
	<div class="flex-none hidden px-2 mx-2 lg:flex">
		<div class="flex items-stretch">
			<a
				sveltekit:prefetch
				href="/"
				class="text-center no-underline btn btn-ghost btn-md rounded-btn"
			>
				{#if $page.path === '/'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="inline-block w-5 mr-2 stroke-current"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
						/>
					</svg>
				{:else}
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
				{/if}

				Home
			</a>
			<a
				sveltekit:prefetch
				href="/huisregels"
				class="text-center no-underline btn btn-ghost btn-md rounded-btn"
			>
				{#if $page.path === '/huisregels'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="inline-block w-5 mr-2 stroke-current"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-5 mr-2 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
						/>
					</svg>
				{/if}

				Huisregels
			</a>
			<a sveltekit:prefetch href="/nieuws" class="no-underline btn btn-ghost btn-md rounded-btn">
				{#if $page.path === '/nieuws'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="inline-block w-5 mr-2 stroke-current"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
							clip-rule="evenodd"
						/>
						<path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
					</svg>
				{:else}
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
				{/if}

				Nieuws
			</a>
			<a sveltekit:prefetch href="/over-ons" class="no-underline btn btn-ghost btn-md rounded-btn">
				{#if $page.path === '/over-ons'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="inline-block w-5 mr-2 stroke-current"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
							clip-rule="evenodd"
						/>
					</svg>
				{:else}
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
				{/if}

				Over ons
			</a>
			<a href="/word-lid" class="ml-2.5 subpixel-antialiased btn btn-primary">Word lid!</a>
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
			class="items-center shadow menu dropdown-content bg-base-100 rounded-box w-52 mt-80"
		>
			<li class="mt-2">
				<a href="/" class="no-underline btn btn-ghost btn-md rounded-btn">
					{#if $page.path === '/'}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="inline-block w-5 mr-2 stroke-current"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
							/>
						</svg>
					{:else}
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
					{/if}
					Home
				</a>
			</li>
			<li class="mt-2">
				<a
					sveltekit:prefetch
					href="/huisregels"
					class="no-underline btn btn-ghost btn-md rounded-btn"
				>
					{#if $page.path === '/huisregels'}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="inline-block w-5 mr-2 stroke-current"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
						</svg>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="inline-block w-5 mr-2 stroke-current"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
							/>
						</svg>
					{/if}
					Huisregels
				</a>
			</li>
			<li class="mt-2">
				<a sveltekit:prefetch href="/nieuws" class="no-underline btn btn-ghost btn-md rounded-btn">
					{#if $page.path === '/nieuws'}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="inline-block w-5 mr-2 stroke-current"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
								clip-rule="evenodd"
							/>
							<path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
						</svg>
					{:else}
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
					{/if}
					Nieuws
				</a>
			</li>
			<li class="mb-2">
				<a
					sveltekit:prefetch
					href="/over-ons"
					class="no-underline btn btn-ghost btn-md rounded-btn"
				>
					{#if $page.path === '/over-ons'}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="inline-block w-5 mr-2 stroke-current"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
								clip-rule="evenodd"
							/>
						</svg>
					{:else}
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
					{/if}
					Over ons
				</a>
			</li>
			<li><a href="/word-lid" class="mb-2 subpixel-antialiased btn btn-primary">Word lid!</a></li>
		</ul>
	</div>
</div>
