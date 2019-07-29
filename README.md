<div align="center">
	<img src="media/logo.png" title="logo" alt="logo" width="454">
	<h1>express forward</h1>
	<p>
		<b>Simple express enhancer made to forward requests</b>
	</p>
	<br>
</div>

## Usage

###

```javascript
import { expressForward } from 'express-forward';

app = express();

// every calls made to /forward/target-url will be forwarded to target-url
expressForward('forward', app);

// later
http.get('/forward/https://my-target-url');
```
