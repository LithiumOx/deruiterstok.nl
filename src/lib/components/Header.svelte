<script>
	import Logo from '../../assets/Logo.svg';
	import { page } from '$app/stores';
</script>

<div class="navbar flex-none w-full pb-1 pt-1 bg-neutral text-neutral-content z-10 rounded-b-xl">
	<div class="flex-none">
		<a href="/app"
			><label for="mobile-drawer" class="btn btn-circle btn-ghost drawer-button"
				><img src={Logo} alt="" /></label
			></a
		>
	</div>
	<div class="flex-1 px-2 mx-2"><span class="text-lg font-bold" /></div>
	<div class="flex-none">
		<button class="btn btn-circle btn-ghost">
			<a href="/app/profile"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
					/>
				</svg></a
			>
		</button>
	</div>
</div>
