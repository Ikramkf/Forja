import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private service: MovieApiServiceService,
    private title: Title,
    private meta: Meta
  ) {
    this.title.setTitle('Home - Forja');
    this.meta.updateTag({
      name: 'description',
      content: 'watch online movies',
    });
  }

  bannerResult: any = [];
  tendancesFilmsResultat: any = [];
  FilmsActionsResultat: any = [];
  FilmsAventureResultat: any = [];
  FilmsAnimationsResultat: any = [];
  FilmsComedieResultat: any = [];
  FilmsDocumentairesResultat: any = [];
  FilmsScienceFictionResulat: any = [];
  FilmsThrillerResultat: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovies();
    this.actionMovies();
    this.adventureMovies();
    this.comedyMovies();
    this.animationMovies();
    this.documentaryMovies();
    this.sciencefictionMovies();
    this.thrillerMovies();
  }
  //bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }

  trendingData() {
    this.service.trendingMoviesApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');

      this.tendancesFilmsResultat = result.results;
    });
  }
  // action
  actionMovies() {
    this.service.fetchActionMovies().subscribe((result) => {
      this.FilmsActionsResultat = result.results;
    });
  }

  // adventure
  adventureMovies() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.FilmsAventureResultat = result.results;
    });
  }

  // animation
  animationMovies() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      this.FilmsAnimationsResultat = result.results;
    });
  }

  // comedy
  comedyMovies() {
    this.service.fetchComedyMovies().subscribe((result) => {
      this.FilmsComedieResultat = result.results;
    });
  }

  // documentary
  documentaryMovies() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.FilmsDocumentairesResultat = result.results;
    });
  }

  // sciencefiction
  sciencefictionMovies() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      this.FilmsScienceFictionResulat = result.results;
    });
  }

  // thriller
  thrillerMovies() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.FilmsThrillerResultat = result.results;
    });
  }
}
