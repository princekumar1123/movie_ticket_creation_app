import { Component } from '@angular/core';

interface IObject {
  Movie: string
  Timing: string
  Name: string
  Age: number
  Gender: string
  TicketCount: number
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {
  nameValue: string = ""
  nameError: string = ""
  ageValue!: number
  ageError: string = ""
  genderValue: string = ""
  genderError: string = ""
  movieValue: string = ""
  movieError: string = ""
  ticketValue!: number
  ticketCountError: string = ""
  timeValue: string = "10:30 AM"
  dataValue: string = ""
  dateError: string = ""
  paymentValue: string = "cash"

  dataObject: IObject = {
    Movie: '',
    Timing: '',
    Name: '',
    Age: 0,
    Gender: '',
    TicketCount: 0
  }
  conditionStatement: boolean = false
  booking() {
    if (this.nameValue.trim() == "") this.nameError = "Please Enter the Name..!"
    else if (this.ageValue == undefined || this.ageValue == 0) { this.nameError = ""; this.ageError = "Please Enter the Age..!" }
    else if (this.genderValue == "") { this.nameError = ""; this.ageError = ""; this.genderError = "Please Select the Gender..!" }
    else if (this.movieValue == "") { this.nameError = ""; this.ageError = ""; this.genderError = ""; this.movieError = "Please Select the Movie..!" }
    else if (this.ticketValue == undefined || this.ticketValue == 0) { this.nameError = ""; this.ageError = ""; this.genderError = ""; this.movieError = ""; this.ticketCountError = "Please Enter the Number of Tickets..!" }
    else if (this.dataValue == "") { this.nameError = ""; this.ageError = ""; this.genderError = ""; this.movieError = ""; this.ticketCountError = ""; this.dateError = "Please Select the Date..!" }
    else {
      this.nameError = ""; this.ageError = ""; this.genderError = ""; this.movieError = ""; this.ticketCountError = ""; this.dateError = ""
      this.dataObject.Movie = this.movieValue
      this.dataObject.Timing = this.timeValue
      this.dataObject.Name = this.nameValue
      this.dataObject.Age = this.ageValue
      this.dataObject.Gender = this.genderValue
      this.dataObject.TicketCount = this.ticketValue
      this.conditionStatement = true
    }
  }
}