import { admin } from '../config';
import { isEnabled } from '../models/user';

export const ensureAuthenticated = (req, res, next) => {
  if(req.isAuthenticated()) {
    isEnabled(req.user.email, (enabled) => {
      if(enabled)
        return next();
      else
        res.redirect('/users/login');
    });

	}

}

export const ensureAdmin = (req, res, next) => {
  if(req.isAuthenticated() && req.user.email === admin.email) {
		return next();
	}
	res.redirect('/users/login');
}
