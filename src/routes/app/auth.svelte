<script>
	import {
		Auth0Context,
		Auth0LoginButton,
		Auth0LogoutButton,
		authError,
		authToken,
		idToken,
		isAuthenticated,
		isLoading,
		login,
		logout,
		userInfo
	} from '@dopry/svelte-auth0';
</script>

<Auth0Context domain="devenv1.eu.auth0.com" client_id="ByHotM5JrhtGVsdOjmKgKVJItMox4sSz">
	<Auth0LoginButton class="btn">Login</Auth0LoginButton>
	<Auth0LogoutButton class="btn">Logout</Auth0LogoutButton>
	<pre>isLoading: {$isLoading}</pre>
	<pre>isAuthenticated: {$isAuthenticated}</pre>
	<pre>authToken: {$authToken}</pre>
	<pre>idToken: {$idToken}</pre>
	<pre>userInfo: {JSON.stringify($userInfo, null, 2)}</pre>
	<pre>authError: {$authError}</pre>
</Auth0Context>
