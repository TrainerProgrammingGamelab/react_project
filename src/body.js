import React, { useState } from "react";
import ImgAbout from "./img/Logo.png";
import ImgKursus from "./img/card1.png";
import ImgMagang from "./img/card2.png";
import ImgKarir from "./img/card3.png";
import {
  BennerStyle, ButtonStyle, BennerText,
  AboutStyle, AboutImg, AboutHeading, AboutText,
  TestiStyle, TestiForm, StyleRow, StyleCol, StyleCard, ContactStyle
} from "./StyledBody";

const Body = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [inputAuthor, setInputAuthor] = useState('');
  const [inputText, setInputText] = useState('');

  const handleAuthorChange = (e) => {
    setInputAuthor(e.target.value);
  };

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const addTestimonial = () => {
    if (inputAuthor.trim() !== '' && inputText.trim() !== '') {
      const newTestimonial = {
        author: inputAuthor,
        text: inputText,
      };
      setTestimonials([...testimonials, newTestimonial]);
      setInputAuthor('');
      setInputText('');
    }
  };

  const deleteTestimonial = (index) => {
    const updatedTestimonials = testimonials.filter((_, i) => i !== index);
    setTestimonials(updatedTestimonials);
  };

  const handleGamelabClick = () => {
    window.location.href = 'https://www.gamelab.id/';
  }

  const handleDashboardClick = () => {
    window.location.href = 'https://www.gamelab.id/dashboard';
  }

  return (
    <body>
      <BennerStyle>
          <BennerText>
              <h3>Raih Masa Depan Brilian dengan Optimasi Skill Digital</h3>
              <ButtonStyle onClick={handleGamelabClick}>Gamelab.ID</ButtonStyle>
          </BennerText>
      </BennerStyle>
      <AboutStyle className="container">
          <AboutImg>
            <img src={ImgAbout} style={{height: "300px", width: "300px"}} />
          </AboutImg>
          <AboutText>
              <AboutHeading>GAMELAB.ID</AboutHeading>
              <p>GAMELAB.ID membantumu mengoptimalkan skill agar siap kerja melalui program pelatihan, magang online, dan kelas intensif yang diampu oleh para profesional di bidangnya.</p>
              <ButtonStyle onClick={handleDashboardClick}>Dashboard</ButtonStyle>
          </AboutText>
      </AboutStyle>

      <StyleRow>
        <h2>Program Unggulan GAMELAB</h2>
        <p>Program Lengkap SIAP KERJA dan SIAP WIRAUSAHA</p>
        <div>
        <StyleCol className="cards">
            <StyleCard>
                <img src={ImgKursus} style={{height: "150px", width: "auto"}} />
                <h2 className="title">Kursus Upskill</h2>
                <p className="info">Upgrade skill secara intensif sesuai dengan kebutuhan industri. Didukung dengan
                    kurikulum berbasis industri dan para trainer expert.</p>
                <ButtonStyle>Learn more</ButtonStyle>
            </StyleCard>
        </StyleCol>
        <StyleCol className="cards">
            <StyleCard>
                <img src={ImgMagang} style={{height: "150px", width: "auto"}} />
                <h2 className="title">Magang Bersertifikat</h2>
                <p className="info">Cocok buat kamu siswa SMK, mahasiswa, dan guru yang ingin magang untuk tujuan akademis.
                    Bisa pilih durasi dan konsentrasi</p>
                <ButtonStyle>Learn more</ButtonStyle>
            </StyleCard>
        </StyleCol>
        <StyleCol className="cards">
            <StyleCard>
                <img src={ImgKarir} style={{height: "150px", width: "auto"}} />
                <h2 className="title">Karir Bootcamp</h2>
                <p className="info">Cocok buat kamu yang ingin mengoptimalkan skill secara penuh dan intensif Plus dibantu
                    Penyaluran Kerja ke Hiring Partner Gamelab</p>
                <ButtonStyle>Learn more</ButtonStyle>
            </StyleCard>
        </StyleCol>
        </div>
      </StyleRow>

      <section>
        <ContactStyle>
            <div class="left">
                <div class="app-title">
                    <span>CONTACT</span>
                    <span>US</span>
                </div>
                <div class="app-contact">CONTACT INFO : +62 81 314 928 595</div>
            </div>
            <div class="screen-body-item">
                <div class="app-form">
                    <div class="app-form-group">
                        <input class="app-form-control" placeholder="NAME"/>
                    </div>
                    <div class="app-form-group">
                        <input class="app-form-control" placeholder="EMAIL"/>
                    </div>
                    <div class="app-form-group">
                        <input class="app-form-control" placeholder="CONTACT NO"/>
                    </div>
                    <div class="app-form-group message">
                        <input class="app-form-control" placeholder="MESSAGE"/>
                    </div>
                    <div class="app-form-group buttons">
                        <button class="app-form-button">CANCEL</button>
                        <button class="app-form-button">SEND</button>
                    </div>
                </div>
            </div>
        </ContactStyle>
      </section>

      <section>
        <div>
          <TestiForm>
            <h1>Testimonial</h1>
            <label for="nama">Nama:</label>
            <input
                type="text"
                placeholder="Enter author..."
                value={inputAuthor}
                onChange={handleAuthorChange}
              />

            <label for="pesan">Pesan:</label>
            <textarea
              placeholder="Enter testimonial..."
              value={inputText}
              onChange={handleTextChange}
            ></textarea>
            <ButtonStyle onClick={addTestimonial}>Add Testimonial</ButtonStyle>
          </TestiForm>

          <TestiStyle className="testimonial-list">
            {testimonials.map((testimonial, index) => (
              <div className="box" key={index}>
                  <h2 className="card-title">{testimonial.author}</h2>
                  <p className="card-text">{testimonial.text}</p>
                  <ButtonStyle onClick={() => deleteTestimonial(index)}>Delete</ButtonStyle>
              </div>
            ))}
          </TestiStyle>
        </div>
      </section>
    </body>
  );
}

export default Body;