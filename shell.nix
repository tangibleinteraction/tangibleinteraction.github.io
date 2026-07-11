{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    ruby_3_1
    jekyll
    bundler
    libffi
    zlib
    gcc
    gnumake
    nodejs

    git
    
    # Dependencies for GitHub Pages
    libxml2
    libxslt
  ];

  shellHook = ''
    export GEM_HOME=$PWD/.gem
    export PATH=$GEM_HOME/bin:$PATH
    
    # Avoid SSL certificate issues
    export SSL_CERT_FILE=${pkgs.cacert}/etc/ssl/certs/ca-bundle.crt
    
    echo "Jekyll environment ready!"
    echo "Run 'bundle install' to install dependencies"
    echo "Run 'bundle exec jekyll serve' to start the local server"
  '';
}