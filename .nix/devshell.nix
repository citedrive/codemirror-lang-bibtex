{
    pkgs,
    perSystem,
    ...
}:
perSystem.devshell.mkShell {
    name = "citedrive/codemirror-lang-bibtex";
    motd = ''
        {141}📝 lang-bibtex 🧑‍💻{reset} development shell
        $(type -p menu &>/dev/null && menu)
    '';

    commands = [
        {
            name = "fmt";
            command = "nix fmt";
            help = "format project files";
            category = "[tools]";
        }
    ];

    packages = with pkgs; [
        nodejs_24
    ];

    env = [];
}
