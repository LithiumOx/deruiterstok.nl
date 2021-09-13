<script>
	import {
		Auth0LoginButton,
		Auth0LogoutButton,
		authError,
		authToken,
		idToken,
		isAuthenticated,
		isLoading,
		userInfo
	} from '@dopry/svelte-auth0';
</script>

<div class="flex m-15">
	<Auth0LoginButton class="btn">Login</Auth0LoginButton>
	<Auth0LogoutButton class="btn">Logout</Auth0LogoutButton>
</div>

<pre>isLoading: {$isLoading}</pre>
<pre>isAuthenticated: {$isAuthenticated}</pre>
<pre>authToken: {$authToken}</pre>
<pre>idToken: {$idToken}</pre>
<pre>userInfo: {JSON.stringify($userInfo, null, 2)}</pre>
<pre>authError: {$authError}</pre>
