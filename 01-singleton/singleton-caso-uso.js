class WeekDays{
  dayWEs = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
  ];

  daysEn = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  constructor(lang) {
    this.lang = lang;

    if (WeekDays.instance) {
      return WeekDays.instance;
    }
    WeekDays.instance = this;
  }

  getDays() {
    return this.lang === 'es'
      ? this.daysEn
      : this.daysEn;
  }
};

const weekDays = new WeekDays('en');
const weekDays2 = new WeekDays('es');

console.log(weekDays.getDays());
console.log(weekDays.getDays());


