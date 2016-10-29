using RestSharp;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Newtonsoft.Json;
using System.IO;


namespace Finder2
{
    public partial class Form1 : Form
    {

        public Form1()
        {
            InitializeComponent();
            btnbag.FlatAppearance.BorderSize = 0;
            btnbag.TabStop = false;
            btnbag.FlatStyle = FlatStyle.Flat;

            btnshoe.FlatAppearance.BorderSize = 0;
            btnshoe.TabStop = false;
            btnshoe.FlatStyle = FlatStyle.Flat;

            btnBottle.FlatAppearance.BorderSize = 0;
            btnBottle.TabStop = false;
            btnBottle.FlatStyle = FlatStyle.Flat;

            btnRemote.FlatAppearance.BorderSize = 0;
            btnRemote.TabStop = false;
            btnRemote.FlatStyle = FlatStyle.Flat;

            btnback.FlatAppearance.BorderSize = 0;
            btnback.TabStop = false;
            btnback.FlatStyle = FlatStyle.Flat;

            btnSetting.FlatAppearance.BorderSize = 0;
            btnSetting.TabStop = false;
            btnSetting.FlatStyle = FlatStyle.Flat;
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            this.TopMost = true;
            //this.FormBorderStyle = FormBorderStyle.None;
            this.WindowState = FormWindowState.Maximized;
        }

        private void btnBottle_Click(object sender, EventArgs e)
        {
            Hide();
            Form2 frm2 = new Form2("chair");
            frm2.Show();

        }

        private void btnshoe_Click_1(object sender, EventArgs e)
        {
            Hide();
            Form2 frm2 = new Form2("Shoe");
            frm2.Show(); 
        }

        private void btnback_Click_1(object sender, EventArgs e)
        {
            StartForm frm = new StartForm();
            frm.Show();
            Hide();
        }

        private void btnSetting_Click(object sender, EventArgs e)
        {
            Form3 frm = new Form3();
            frm.Show();
            Hide();
        }
    }
}
