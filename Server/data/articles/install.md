# Installation - Notes
## Thomas PEUGNET

# Installation - Notes
Cet article contient les notes d'installation permettant d'intégrer rapidement toutes les fonctionnalités nécessaires à l'utilisation correcte de mon terminal.
## `ZSH`
### Télécharger le projet
`sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`
### Télécharger les plugins
`git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions # Autosuggestions`

`git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting # Syntax Highlight`

### Éditer le fichier ~/.zshrc

- Thème : `gnzh`

`plugins=(git zsh-autosuggestions zsh-syntax-highlighting)`

- Dé-commenter  `ENABLE_CORRECTION="true"`

## Hack Nerd Font
### Télécharger la police

`https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/Hack/Regular`
