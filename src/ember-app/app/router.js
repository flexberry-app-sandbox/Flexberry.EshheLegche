import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-eshhe-legche-виды-l');
  this.route('i-i-s-eshhe-legche-виды-e',
  { path: 'i-i-s-eshhe-legche-виды-e/:id' });
  this.route('i-i-s-eshhe-legche-виды-e.new',
  { path: 'i-i-s-eshhe-legche-виды-e/new' });
  this.route('i-i-s-eshhe-legche-вольер-l');
  this.route('i-i-s-eshhe-legche-вольер-e',
  { path: 'i-i-s-eshhe-legche-вольер-e/:id' });
  this.route('i-i-s-eshhe-legche-вольер-e.new',
  { path: 'i-i-s-eshhe-legche-вольер-e/new' });
  this.route('i-i-s-eshhe-legche-график-работы-l');
  this.route('i-i-s-eshhe-legche-график-работы-e',
  { path: 'i-i-s-eshhe-legche-график-работы-e/:id' });
  this.route('i-i-s-eshhe-legche-график-работы-e.new',
  { path: 'i-i-s-eshhe-legche-график-работы-e/new' });
  this.route('i-i-s-eshhe-legche-должность-l');
  this.route('i-i-s-eshhe-legche-должность-e',
  { path: 'i-i-s-eshhe-legche-должность-e/:id' });
  this.route('i-i-s-eshhe-legche-должность-e.new',
  { path: 'i-i-s-eshhe-legche-должность-e/new' });
  this.route('i-i-s-eshhe-legche-животные-l');
  this.route('i-i-s-eshhe-legche-животные-e',
  { path: 'i-i-s-eshhe-legche-животные-e/:id' });
  this.route('i-i-s-eshhe-legche-животные-e.new',
  { path: 'i-i-s-eshhe-legche-животные-e/new' });
  this.route('i-i-s-eshhe-legche-расписание-l');
  this.route('i-i-s-eshhe-legche-расписание-e',
  { path: 'i-i-s-eshhe-legche-расписание-e/:id' });
  this.route('i-i-s-eshhe-legche-расписание-e.new',
  { path: 'i-i-s-eshhe-legche-расписание-e/new' });
  this.route('i-i-s-eshhe-legche-рацион-l');
  this.route('i-i-s-eshhe-legche-рацион-e',
  { path: 'i-i-s-eshhe-legche-рацион-e/:id' });
  this.route('i-i-s-eshhe-legche-рацион-e.new',
  { path: 'i-i-s-eshhe-legche-рацион-e/new' });
  this.route('i-i-s-eshhe-legche-сотрудники-l');
  this.route('i-i-s-eshhe-legche-сотрудники-e',
  { path: 'i-i-s-eshhe-legche-сотрудники-e/:id' });
  this.route('i-i-s-eshhe-legche-сотрудники-e.new',
  { path: 'i-i-s-eshhe-legche-сотрудники-e/new' });
});

export default Router;
