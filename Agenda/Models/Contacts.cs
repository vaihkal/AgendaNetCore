using System;
using System.Collections.Generic;

namespace Agenda.Models
{
    public partial class Contacts
    {
        public long IdUser { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Cellphone { get; set; }
        public string Email { get; set; }
        public DateTime? Birthdate { get; set; }
        public bool? Sex { get; set; }
        public bool? Enabled { get; set; }
        public DateTime? CreatedAt { get; set; }
    }
}
